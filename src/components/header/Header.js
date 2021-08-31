import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export default function Header (){
    return (
        <div>
            <Link path>users</Link>
            <Link path>posts</Link>
        </div>
    );
}