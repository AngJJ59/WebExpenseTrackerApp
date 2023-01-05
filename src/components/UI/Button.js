import './Button.css'

export const ChangeTitleButton = (props) => {
    return(
        <div>
            <button className= 'change-title-button'>{props.children}</button>
        </div>
    )
}

