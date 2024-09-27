import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { Button, message, Space } from 'antd';
import {clearAll} from "../redux/Errors/Reducer";


const Error = () => {

    const [messageApi, contextHolder] = message.useMessage();

    const errors = useSelector((state)=>state.errors.errors);
    const dispatch = useDispatch();

    const success = () => {
        messageApi.open({
          type: 'success',
          content: 'This is a success message',
        });
      };
      const error = () => {
        messageApi.open({
          type: 'error',
          content: 'This is an error message',
        });
      };
      const warning = () => {
        messageApi.open({
          type: 'warning',
          content: 'This is a warning message',
        });
      };

    useEffect(()=>{
        errors.map((val,key)=>{
            if(val?.color === "warning"){
                error();
                // toast.warn(val?.message, options);
            }
            else if(val?.color === "danger"){
                error();
                // toast.error(val?.message, options);
            }
            else if(val?.color === "success"){
                success();
            }
        })

        if(errors.length > 0) setTimeout(()=>{
            dispatch(clearAll());
        },1000)
    },[errors])

    return (
        <>
            {contextHolder}
        </>
    );
}

export default Error;