import './top.scss';

const tick = document.querySelector('.top__tick');

tick.addEventListener('click', function() {
    if (tick.classList.contains('top__hide')) {
        tick.classList.remove('top__hide')
    } else (
        tick.classList.add('top__hide')
    )
}
)

const Top = function() {
    return (
        <div className="top">
            <div className="container">
                <div className="top__box">
                    <h1 className="top__h1">To Do App</h1>
                    <form className="top__form">
                        <input className="top__input" placeholder="some words"></input>
                        <button className="top__submit" type="submit">
                            <img className="top__buttonImg" src="./input-plus.png" />
                        </button>
                    </form>
                    <div className="top__line"></div>
                    <div className="top__field">
                        <img className="top__tick" src="./check.svg" />
                        <img className="top__tick top__tickok" src="./checkok.svg" />
                        <p className="top__todo">dscsdc</p>
                    </div>
                    <div className="top__field">
                        <img className="top__tick" src="./check.svg" />
                        <img className="top__tick top__hide" src="./checkok.svg" />
                        <p className="top__todo">dscsdc</p>
                    </div>
                    <div className="top__field">
                        <img className="top__tick" src="./check.svg" />
                        <img className="top__tick top__hide" src="./checkok.svg" />
                        <p className="top__todo">dscsdc</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Top