import { Button } from '@material-ui/core'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navigate from '../components/Navigate'

export default function Home() {
  return (
    <>
 
    <div className='center'>
      <h1>Добро пожаловать!</h1>
      <h3>Сдесь собраны лучшие треки!</h3>
    </div>

    <style jsx>
      {`
        .center{
          margin-top:150px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
      `}
    </style>
    </>
  )
}
