import React, {Component} from 'react';
import Pagination from "react-js-pagination";

class Help extends Component {

    getData = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => console.log(json[7].title))
            .then(json=> <div>{json}</div>)
    }

    componentDidMount() {
        this.getData()
    }

    render() {


        return (
            <section id="menu-help" className='foundations-scroll'>
                <div className="menu-title">
                    <h2 onClick={this.getData}>Komu pomagamy?
                        <div className="decoration"></div>
                    </h2>
                    <div className="buttons">
                        <div className="button">
                            <p>Fundacjom</p>
                        </div>
                        <div className="button">
                            <p>Organizacjom pozarządowym</p>
                        </div>
                        <div className="button">
                            <p>Lokalnym zbiórkom</p>
                        </div>
                    </div>


                    <p className='description'>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z
                        którymi współpracujemy.
                        Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.

                    </p>
                </div>

                <ul className='foundation-list '>

                    <li className='foundation-item'>
                        <h3 name="dbam o zdrowie" className="foundation-name">Fundacja: Lorem ipsum.</h3>
                        <p>Cel i misja: Lorem ipsum dolor sit amet.</p>
                        <p>ubrania, zabawki lsklsklskls</p>
                    </li>
                    <li className='foundation-item'><h3 name="dbam o zdrowie" className="foundation-name">Fundacja:
                        Lorem ipsum.</h3>
                        <p>Cel i misja: Lorem ipsum dolor sit amet.</p>

                        <p>ubrania, zabawki lsklsklskls</p></li>
                    <li className='foundation-item'><h3 name="dbam o zdrowie" className="foundation-name">Fundacja:
                        Lorem ipsum.</h3>
                        <p>Cel i misja: Lorem ipsum dolor sit amet.</p>
                        <p>ubrania, zabawki lsklsklskls</p></li>
                </ul>

                <div className="pagination">
                    <div className="page">1</div>
                    <div className="page">2</div>
                    <div className="page">3</div>
                </div>


            </section>
        );
    }
}

export default Help;