import Button from '../Button/Button';
import Card from '../Cards/Card';
import './Main.scss';
const Main = () => {
    return (
        <main className="main">
            <h1 className="main__title">ST</h1>
            <p className="main__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </p>
            <Button name={'Get Course'} />
            <Card />
        </main>
    )
}

export default Main
