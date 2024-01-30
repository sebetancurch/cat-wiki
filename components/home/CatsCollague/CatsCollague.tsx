'use client'

import Image from 'next/image'

export const CatsCollague = () => {
    return (
        <div style={{flex: '1'}}>
            <div style={{display: 'flex', justifyContent: 'center', gap: '1rem'}}>
                <div style={{display: 'flex',flexDirection: 'column', alignItems: 'flex-end'}}>           
                    <Image
                        style={{borderRadius: '24px'}}
                        src={require('@/public/images/image2.png')}
                        width={273}
                        height={167}
                        alt="Picture of kitten"/>
                    <Image
                        style={{borderRadius: '24px'}}
                        src={require('@/public/images/image1.png')}
                        width={195}
                        height={293}
                        alt="Picture of kitten"/>
                </div>
                <Image
                    style={{borderRadius: '24px'}}
                    src={require('@/public/images/image3.png')}
                    width={238}
                    height={385}
                    alt="Picture of kitten"/>
            </div>
        </div>
    )
}