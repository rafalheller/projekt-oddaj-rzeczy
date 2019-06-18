import React, {Component} from 'react';
import HelpBtn from "./HelpBtn";
import { Pagination } from 'react-bootstrap';

const style = {
    fontWeight: 900
}

class Help extends Component {
    state = {
        data: [],
        organizations: ["foundations", "organizations","local"]
    }

    getData = () => {
        fetch(`http://localhost:5555/${this.state.organizations}/?_page=1&_limit=3`)
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
                  <HelpBtn name={'Fundacjom'}/>
                  <HelpBtn name={'Organizacjom pozarządowym'}/>
                  <HelpBtn name={'Lokalnym zbiórkom'}/>
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
            {/*<Pagination*/}
            {/*    className={'ok'}*/}
            {/*    bsSize="medium"*/}
            {/*    items={10}*/}
            {/*    activePage={1}>*/}
            {/*    <li className="page-item"><a className="page-link" href="#">Previous</a></li>*/}
            {/*    <li className="page-item"><a className="page-link" href="#">1</a></li>*/}
            {/*    <li className="page-item"><a className="page-link" href="#">2</a></li>*/}
            {/*    <li className="page-item"><a className="page-link" href="#">3</a></li>*/}
            {/*    <li className="page-item"><a className="page-link" href="#">Next</a></li></Pagination>*/}


        </section>;
    }
}

export default Help;