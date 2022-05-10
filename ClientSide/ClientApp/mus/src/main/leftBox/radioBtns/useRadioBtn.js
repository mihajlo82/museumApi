import {useContext, useEffect} from 'react';
import { MyMuseumContext } from '../../../context/MuseumContext';
import axios from 'axios'

const useRadioBtn = () => {
    const {myData, myTypeArt, mySearchWord} = useContext(MyMuseumContext);
    const [data, setData] = myData;
    const [typeArt, setTypeArt] = myTypeArt;
    const [searchWord, setSearchWord] = mySearchWord;

    
    const onRadioChange = (val) => setTypeArt(val);

    const handleSearchChange = (e) => {
        if(e.target.value === '' || e.target.value == undefined){
           setSearchWord('__MAGIC_LOGIC_NO_STRING__')
        }else{
           setSearchWord(e.target.value);
        }
    }


    useEffect(()=>{
        filterData();
    }, [typeArt, searchWord])

    const filterData = () => {
        axios.get(`https://localhost:44372/api/Wings/GetFilterWing/${typeArt}/${searchWord}`)
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }

  return {onRadioChange, handleSearchChange}
}

export default useRadioBtn