import Link from 'next/link';

const Button = (props) => {
  return (
    <Link href={props.link}>
      <a className={StyleSheet.btn}>{props.children} </a>
    </Link>
  );
};

export default Button;
