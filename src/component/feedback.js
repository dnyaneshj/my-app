import React from 'react';

const Feedback = () => {
    const feedbackData = [
        { q: 'what is current v of react', options: ['18.2', '19.2', '15.2', '1.2'], type: 'S' },
        { q: 'useState Hooks retuen type', options: ['String', 'Array', 'Object', 'bool'], type: 'S' },
        { q: 'below are the members of React.Component', options: ['Render', 'useState', 'setState', 'props'], type: 'M' }
    ];

    return <>
        <h2>Feedback frorm </h2>
        {
            feedbackData.map((feeds, index) => {
                const { q, options, type } = feeds;
                return <div key={index}>
                    <h4>{index + 1}. {q}</h4>
                    {
                        options.map((op, ind) => {
                            return <p key={ind}>
                                {type === 'S' ? <input name={index} type='radio' /> : <input type="checkbox" />}
                                {op}
                            </p>
                        })
                    }
                </div>
            })
        }
    </>
}
export default Feedback