import React from 'react';
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
                    onClick={() => { }}
                />
            </h1>
            <hr />
        </div>
    )
}
