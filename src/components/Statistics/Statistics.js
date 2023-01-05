export const Statistics = ({title, stats}) => {
    return (
    <section class="statistics">
    <h2 class="title">{title}</h2>
  {stats.map(({id, label, percentage}) =>{
    return ( 
      <li key={id}>
        <span class="label">{label}</span>
        <span class="percentage">{percentage}&#37;</span>
      </li>

    )
  }
  )}

  </section>)
}
