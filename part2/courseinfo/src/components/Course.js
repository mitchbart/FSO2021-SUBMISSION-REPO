

const Header = ({ course }) => {
    return (
        <h1>{course.name}</h1>
    )
}

const Total = ({ course }) => {
    let initialValue = 0
    const sum = course.parts.reduce(
        (accumulator, currentValue) => accumulator + currentValue.exercises
        , initialValue
    )

    return(
        <p>Number of exercises {sum}</p>
    ) 
}

const Part = ({ part }) => {
    return (
        <p>
            {part.name} {part.exercises}
        </p>    
    )
}

const Content = ({ course }) => {
    return (
        <div>  
            {course.parts.map(part =>
                <Part 
                    key={part.id} 
                    part={part} 
                />
            )}
        </div>
    )
}

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
        </div>
    )
}

export default Course