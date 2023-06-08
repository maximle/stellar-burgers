import React, {useRef} from 'react';
import styles from './constructor-card.module.css';
import { Button, DragIcon,ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrop, useDrag } from 'react-dnd';
import { DELETE_INGREDIENT, SORT_INGREDIENT } from '../../services/actions/burgerConstructor';
import { useDispatch } from 'react-redux';

export default function ConstructorCard({ item, index }) {
  const dispatch = useDispatch();
  //console.log(item, item.index);
  const handleDeleteButton = (item, index) => {
    dispatch({
      type: DELETE_INGREDIENT,
      index: index,
      payload: item
    });
  }

  const ref = useRef(null);
  const [{ handlerId }, drop] = useDrop({
    accept: 'ConstructorCard',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      // Determine mouse position
      const clientOffset = monitor.getClientOffset()
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      // Time to actually perform the action
      dispatch({
        type: SORT_INGREDIENT,
        dragIndex: dragIndex,
        hoverIndex: hoverIndex,
        element: item.item
      });
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex
    },
  })
  const [{ isDragging }, drag] = useDrag({
    type: 'ConstructorCard',
    item: () => {
      return { item, index }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })
  const opacity = isDragging ? 0 : 1
  drag(drop(ref));

  return ( 
    <li 
      key={item['_id']} 
      className={`${styles['ingridients-item']}`} 
      ref={ref} 
      data-handler-id={handlerId}
      style={{ opacity }}
    >
      <span className={`${styles['drag-icon']}`}>
        <DragIcon type="primary" />
      </span>
      
      <ConstructorElement 
      text={item.name} 
      price={item.price} 
      thumbnail={item.image}
      handleClose={() => handleDeleteButton(item, index)}
      />
    </li>
  )

}