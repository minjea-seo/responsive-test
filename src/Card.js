import React,{useRef, useEffect} from 'react';


function Card({cardWidth, layoutCase, currentLayout}) {
    const cardRef = useRef((cardWidth)?cardWidth:1000);

    return (
        <div className='flex flex-col'>
            <div
            ref={cardRef}
            className={`h-20 rounded-lg flex justify-center border-2 items-center ${(layoutCase<3)?'m-6 mt-2':'m-4 mt-2'} ${
                (cardWidth===1136)? 'bg-red-400':
                (cardWidth===976)? 'bg-blue-400':
                (cardWidth===736)? 'bg-green-400':
                (cardWidth===704)? 'bg-purple-400':
                'bg-gray-400'
            }   
            `}
            style={
                {
                    width: cardWidth? cardWidth: '100%',

                }
            }
            >
            {`${(cardRef.current.offsetWidth!==undefined)?'Card width:'+ cardRef.current.offsetWidth:'Resize the screen to get the width'}`}
            </div>
            {(layoutCase<4)?
            <>
            <div>
                <img
                className={(layoutCase<3)?'m-6 mt-1':'m-4 mt-1'}
                style={{width:cardWidth}}
                src={process.env.PUBLIC_URL +`/img/hh-${cardWidth}.png`} alt="hero" />
            </div>
            <div>
                <img
                className={(layoutCase<3)?'m-6 mt-1':'m-4 mt-1'}
                style={{width:cardWidth}}
                src={process.env.PUBLIC_URL +`/img/rr-${cardWidth}.png`} alt="research reports" />
            </div>
            </>
            :null}
            
        </div>
    );
}

export default Card;