import { useState } from "react"
import axios from 'axios'
import Forms from "./Components/Form"

export default function Singup()
{
    return( <Forms button="Sing Up" endpoint="register"/>
    )
}