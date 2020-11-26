import React from 'react'

const InstalltionSecondPara = (props) => {
    return (
        <>
        <span>{props.content}</span>
        {!props.lineParams && <span className="v-lines">|</span>}
        </>
    )
}

export default InstalltionSecondPara
