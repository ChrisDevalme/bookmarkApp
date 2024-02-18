import { useState, useEffect } from 'react'
import BookmarkList from './components/BookmarkList/BookmarkList'
import styles from './App.module.scss'
import { Route, Routes } from 'react-router-dom'
import UpdateBookmark from './components/Pages/UpdateBookmark'
import Home from './components/Pages/Home'


export default function App(){
    
    return(
        
        <div className='App'>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/UpdateBookmark/:bmark' element={<UpdateBookmark/>}/>
        </Routes>
        </div>
    )
}