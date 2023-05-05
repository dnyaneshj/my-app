import skillStoreList from '../store/skillStore';
import { postAPI,getAPI } from './fetchService';

const GetUserDetails = async () =>{
    const response = await postAPI({
        url:'sit/user',
        payload:{
            "sitdata" : "vn54gav",
            "loginid"  : "vn54gaw"
        },
        
    });
    if(response){
        const sitdata = response.sitdata || {};
    }
}

const GetSkillList = async () =>{
    const data = {
        url:'sit/getSkillList'
    }
    const response = await getAPI(data);
    skillStoreList.update(
        s => {
            s.GetSkillList.list = response.list;
    })
    if(response){
        const sitdata = response.sitdata || {};
    }
}
export {GetSkillList,GetUserDetails}

