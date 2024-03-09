import IonIcon from '@reacticons/ionicons'
import React from 'react'


function FindMore() {
  return (
    <>
        <div className="bg-divbg bg-cover h-[100vh] w-full flex justify-center items-center">
            <div className="text-center">
                <h1 className='text-[70px]'>Find More</h1>
                <div className="flex flex-col-4 justify-center text-[50px] mt-10">
                    <IonIcon name="logo-instagram"></IonIcon>
                    <IonIcon name="logo-instagram"></IonIcon>
                    <IonIcon name="logo-instagram"></IonIcon>
                </div>
            </div>
        </div>
    </>
  )
}

export default FindMore