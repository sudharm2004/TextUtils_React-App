import React from 'react'

export default function About(props) {

    const style={
        color:props.style.color,
        backgroundColor:props.style.backgroundColor,
        border: props.style.hspCode>127.5? '3px solid black': '3px solid white'
    }

    return (
        
        <div className='container rounded my-4' style={style}>
            <h1>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item my-2" style={style}>
                    <h2 className="accordion-header" id="headingOne">
                        <button style={style} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <b>Analyze The Text</b>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Analyze Your Text</strong> Bring your text and we will analyze your text for you.Our text Summary includes number characters,words,unique words,sentences,space,word without spaces.
                            Analyze and improve your text. 
                        </div>
                    </div>
                </div>
                <div className="accordion-item my-2" style={style}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button style={style} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                           <b> Modify Your Text</b>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Modify Your Text</strong> You can change your text to uppercase,lowercase or clear your text
                        </div>
                    </div>
                </div>
                <div className="accordion-item mb-4" style={style}>
                    <h2 className="accordion-header" id="headingThree">
                        <button style={style} className="accordion-button collapsed mb" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <b>About Me</b>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>I am an aspiring developer and anime lover</strong> This is a project made by watching tutorial My own mind blowing projects are yet to come to change the world but it will take some time as I have lot of things to do like enjoying college life,watching anime,south-movies and learning many things. 
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
            </div>
        </div>
    )
}
