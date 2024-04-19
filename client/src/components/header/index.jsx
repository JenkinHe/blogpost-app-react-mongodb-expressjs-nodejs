import classes from'./styles.module.css'



export default function Header(){
    return <di classes={classes.header}>
        <h3>Mongodb Expressjs React NodeJS Blog App</h3>
        <ul>
            <li>Home</li>
            <li>Add Blog</li>
        </ul>
    </di>
}