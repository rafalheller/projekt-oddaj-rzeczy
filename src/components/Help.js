import React, {Component} from 'react';
import HelpBtn from "./HelpBtn";
import {Pagination} from 'react-bootstrap';

const style = {
    fontWeight: 900
}

class Help extends Component {
    state = {
        data: [],
        organizations: 'foundations',
        active: false
    }
    showOrganizations = () => {
        this.setState({
            organizations: 'organizations',
            active: !this.state.active
        })
    }
    showFoundations = () => {
        this.setState({
            organizations: 'foundations',
            active: !this.state.active

        })
    }
    showLocalHelp = () => {

        this.setState({

            organizations: 'localHelp',
            active: !this.state.active

        })
    }


    getData = () => {
        fetch(`http://localhost:5555/${this.state.organizations}`)
            .then(response => response.json())
            .then(json => this.setState({
                data: json,
            }))
    }


    componentDidMount() {
        this.getData();
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     this.getData()
    // }


    render() {
        const foundationsList = this.state.data.map(item => (<li key={item.id} className='foundation-item'>
            <h3 className="foundation-name"><span style={style}>Fundacja:</span> {item.name}</h3>
            <p style={style}>Cel i misja: {item.description}</p>
            <p>{item.items.join(', ')}</p>
        </li>))


        return <section id="menu-help" className='foundations-scroll'>
            <div className="menu-title">
                <h2>Komu pomagamy?
                    <div className="decoration"></div>
                </h2>

                <div className="buttons">
                    <HelpBtn
                        style={this.state.active ? {fontWeight: 900} : {fontWeight: 300}}
                        onClick={this.showFoundations}
                        name={'Fundacjom'}
                        profil={'foundations'}/>
                    <HelpBtn
                        style={this.state.active ? {fontWeight: 900} : {fontWeight: 300}}
                        onClick={this.showOrganizations}
                        name={'Organizacjom pozarządowym'}
                        profil={'organizations'}/>
                    <HelpBtn
                        style={this.state.active ? {fontWeight: 900} : {fontWeight: 300}}
                        onClick={this.showLocalHelp}
                        name={'Lokalnym zbiórkom'}
                        profil={'localHelp'}/>
                </div>
                <p className='description'>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z
                    którymi współpracujemy.
                    Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                </p>
            </div>

            <ul className='foundation-list '>
                {foundationsList}
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