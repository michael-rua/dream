import React from 'react'

function WeekListItemMatt ({ weekDay }) {
  return (
    <div className="WeekListItem">
      <h4>WeekListItems</h4>
      <div>
        <h2> Meal: {weekDay.day}</h2>
      </div>

    </div>
  )
}

export default WeekListItemMatt