import {useState, useEffect, createContext} from 'react';
import axios from 'axios';

export const MyMuseumContext = createContext(null);

const MuseumContext = ({children}) => {
    const [data, setData] = useState([]);
    const [typeArt, setTypeArt] = useState(0);
    const [searchWord, setSearchWord] = useState('__MAGIC_LOGIC_NO_STRING__');
    const [activeObject, setActiveObject] = useState({});
    const [isEdit, setIsEdit] = useState(false);
    const [isEmptyRightSide, setIsEmptyRightSide] = useState(true);

    const [editAjaxErr, setEditAjaxErr] = useState(false);
    const [editErrMsg, setEditErrMsg] = useState('');
    const [colorMsg, setColorMsg] = useState('red');


    useEffect(()=>{
      getData();
    }, [])

    const getData = () => {
        const dataFromLocalStorage = localStorage.getItem('data');
       
        if(dataFromLocalStorage){
            setData(JSON.parse(dataFromLocalStorage))
        }else{
        axios.get('https://localhost:44372/api/Wings/GetWings')
            .then( res =>  {
                localStorage.setItem('data', JSON.stringify(res.data));
                setData(res.data)
            })
            .catch(err =>{
              setEditAjaxErr(true);
              setEditErrMsg("Fetching data error!");
              setColorMsg('red');

              const editFin =()=> {
                setEditAjaxErr(false);
                setIsEdit(false);
                setEditErrMsg('');

            }
             setTimeout(editFin, 3000);
            })
       }
    }

  return (
    <MyMuseumContext.Provider 
        value={{ 
             myData:[data, setData],
             myTypeArt: [typeArt, setTypeArt],
             mySearchWord:[searchWord, setSearchWord],
             myActiveObject:[activeObject, setActiveObject],
             myIsEdit:[isEdit, setIsEdit],
             myRightSideEmpty:[isEmptyRightSide, setIsEmptyRightSide],
             myEditAjaxErr: [editAjaxErr, setEditAjaxErr],
             myEditErrMsg: [editErrMsg, setEditErrMsg],
             myColorMsg: [colorMsg, setColorMsg]
             }}>
        {children}
    </MyMuseumContext.Provider>
  )
}

export default MuseumContext