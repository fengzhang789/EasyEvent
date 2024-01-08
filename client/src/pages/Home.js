import React from 'react'

const Home = () => {
    return (
        <div className='bg-slate-850 flex items-center justify-center flex-col bg-slate-900 text-white h-screen'>
            <h1 className='font-bold font-mono text-5xl'>Effortless event planning at your fingertips</h1>
            
            <form>
                <label htmlFor='code'>Enter your 4 digit event code</label><br></br>
                <input id="code" type='text'></input>
                <button type='submit'>Go!</button>
            </form>
        </div>
    )
}

export default Home