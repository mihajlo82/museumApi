import {useContext} from 'react';
import { MyMuseumContext } from '../../context/MuseumContext';

const useRightBox = () => {
    const {myActiveObject, myIsEdit, myRightSideEmpty} = useContext(MyMuseumContext);
    const [activeObject, setActiveObject] = myActiveObject;
    const [isEdit, setIsEdit] = myIsEdit;
    const [isEmptyRightSide, setIsEmptyRightSide] = myRightSideEmpty;


    const editItem = () => {
        let counterElems = 0;
        for(let it in activeObject){
          counterElems++;
        }
        
        if(counterElems > 1){
          setIsEdit(!isEdit);
          setIsEmptyRightSide(false)
        }
      }

  return {editItem, activeObject, isEdit, isEmptyRightSide}
}

export default useRightBox