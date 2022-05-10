import axios from 'axios';
import {useState, useEffect, useContext} from 'react';
import { MyMuseumContext } from '../../../context/MuseumContext';

const useEditLay = () => {
    const [origData, setOrigData] = useState({});
    const {myActiveObject, myIsEdit, myRightSideEmpty, myEditAjaxErr, myEditErrMsg, myColorMsg} = useContext(MyMuseumContext);
    const [activeObject, setActiveObject] = myActiveObject;
    const [isEdit, setIsEdit] = myIsEdit;
   // const [isEmptyRightSide, setIsEmptyRightSide] = myRightSideEmpty;

    const [editName, setEditName] = useState(activeObject.name);
    const [editImageUrl, setEditImageUrl] = useState(activeObject.imageUrl);
    const [editDescription, setEditDescription] = useState(activeObject.description);
    const [editArtType, setEditArtType] = useState(activeObject.artType);
    const [editId, setEditId] = useState(activeObject.id);
    const [editType, setEditType] = useState(activeObject.type);

    const [editAjaxErr, setEditAjaxErr] = myEditAjaxErr;
    const [editErrMsg, setEditErrMsg] = myEditErrMsg;
    const [colorMsg, setColorMsg] = myColorMsg;


    const fetchOrigData = () => {
        axios.get(`https://localhost:44372/api/Wings/GetWings/${editId}`)
            .then( res => setOrigData(res.data))
            .catch(err => console.log(err));
    }

    useEffect(()=>{
        fetchOrigData();
    }, [])

    const checkIsChanged = () => {
        if( editName === origData.name && editImageUrl === origData.imageUrl && editDescription ===  origData.description){
            return false;
        }
        return true;
    }

    const checkValidation = () => {
        setEditName(editName.trim());
        setEditImageUrl(editImageUrl.trim());
        setEditDescription(editDescription.trim());

        if(editName.length < 2 || editName.length > 25){
            return false;
        }else if(editImageUrl.length < 10 || editImageUrl.length > 1499){
            return false;
        }else if(editDescription.length < 20 || editDescription.length > 2999){
           return false;
        }
        return true;
    }


   const editSave = () => {
       let isChanged = checkIsChanged();
       let isValidData = checkValidation();

       if(!isChanged){
            setEditErrMsg('');
            setEditAjaxErr(false);
            setIsEdit(false);
       }else{
           if(isValidData){
                const editData = {
                    id:editId,
                    artType: editArtType,
                    description: editDescription.trim(),
                    imageUrl: editImageUrl.trim(),
                    name: editName.trim(),
                    type: editType
                }

            axios.put(`https://localhost:44372/api/Wings/editWing/${activeObject.id}`, editData)
                    .then(res=> {
                        let tempData = {
                            id: res.data.id,
                            imageUrl: res.data.imageUrl,
                            name: res.data.name,
                            description: res.data.description,
                            artType: editArtType,
                            type: editType
                        }
                            setActiveObject(tempData);
                            setColorMsg('green')
                            setEditAjaxErr(true);
                            setEditErrMsg("Succesfully updated!");

                            const editFin =()=> {
                                setEditAjaxErr(false);
                                setIsEdit(false);
                                setEditErrMsg('');

                            }
                             setTimeout(editFin, 3000);
                        })
                    .catch(err =>{
                        setEditAjaxErr(true);
                        setColorMsg('red')
                        setEditErrMsg("Updating failed!");
                       
                        const editFin =()=> {
                            setEditAjaxErr(false);
                            setEditErrMsg('');
                        }
                         setTimeout(editFin, 3000);

                    
                    });
       
            }else{
                setEditAjaxErr(true);
                setEditErrMsg("Not valid data!");
                setColorMsg('red');

                const editFin =()=> {
                    setEditAjaxErr(false);
                    setEditErrMsg('');
                }
                 setTimeout(editFin, 3000);

    }}

   }

   const editPreview = () => {
    let isValidData = checkValidation();

    if(isValidData){
        let tempData = {
            id: editId,
            imageUrl: editImageUrl.trim(),
            name: editName.trim(),
            description: editDescription.trim(),
            artType: editArtType,
            type: editType
          }
    
           setActiveObject(tempData);
    }else{
        setColorMsg('red')
        setEditAjaxErr(true);
        setEditErrMsg("Cannot preview invalid data!");

        const editFin =()=> {
            setEditAjaxErr(false);
            setEditErrMsg('');

        }
         setTimeout(editFin, 3000);
    }
}

  return { editName, setEditName, editImageUrl, setEditImageUrl, editDescription, setEditDescription, editAjaxErr, editErrMsg, colorMsg, editSave, editPreview}
}

export default useEditLay