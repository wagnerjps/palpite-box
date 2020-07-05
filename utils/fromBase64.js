import React from 'react'

const fromBase64 = value => {
    const buff = Buffer.from(value, 'base64')
    return buff.toString('ascii')
}

export default fromBase64