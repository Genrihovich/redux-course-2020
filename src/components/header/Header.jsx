import { Button } from '../button/Button';

export const Header = () => {
    return (
        <div>
            <h1 className="heading">
                <span>Redux</span>
                <Button
                    children='Змінити тему'
                    className='btn-info'
                    id='theme'
                    onClick={() => { document.body.classList.toggle('dark') }}
                />
            </h1>
            <hr />
        </div>
    )
}
