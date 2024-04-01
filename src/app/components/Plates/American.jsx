import React from 'react'
import { useState } from 'react'

function American({plate, setPlate}) {
  return (
    <>
    <p>American</p>
    <p>{plate}</p>
    <input type='text' value={plate} onChange={(e) => setPlate(e.target.value)} />
    </>
  )
}

export default American