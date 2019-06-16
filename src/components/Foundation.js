const Foundation = ()=> this.state.data.map(item => (<li key={item.id} className='foundation-item'>
    <h3 className="foundation-name"><span style={style}>Fundacja:</span> {item.name}</h3>
    <p style={style}>Cel i misja: {item.description}</p>
    <p>{item.items.join(', ')}</p>
</li>)