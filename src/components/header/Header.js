import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export default function Header (){
    return (
        <div>
            <Link to={'/users'}>users</Link>
            <Link to={'/posts'}>posts</Link>
        </div>
    );
}