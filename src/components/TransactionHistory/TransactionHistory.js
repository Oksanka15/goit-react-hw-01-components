export const TransactionHistory =({items}) =>{
    return <div>{items.map(({id, type, amount, currency})=>{
            return( <tbody>
                <tr key={id}>
                  <td>{type}</td>
                  <td>{amount}</td>
                  <td>{currency}</td>
                </tr>
                
               
              </tbody>)
        })
}</div>
}
