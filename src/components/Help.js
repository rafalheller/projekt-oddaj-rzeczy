import React, {Component} from 'react';
import Pagination from "react-js-pagination";

const style = {
    fontWeight: 900
}

class Help extends Component {
    state = {
        data: [],
    }

    getData = () => {
        fetch('http://localhost:5555/foundations/')
            .then(response => response.json())
            .then(json => this.setState({
                data: json
            }))
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        const list = this.state.data.map(item => (<li key={item.id} className='foundation-item'>
            <h3 className="foundation-name"><span style={style}>Fundacja:</span> {item.name}</h3>
            <p style={style}>Cel i misja: {item.description}</p>
            <p>{item.items.join(', ')}</p>
        </li>))

        return <section id="menu-help" className='foundations-scroll'>
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
                {list}
            </ul>

            <div className="pagination">
                <div className="page">1</div>
                <div className="page">2</div>
                <div className="page">3</div>
            </div>


        </section>;
    }
}

export default Help;