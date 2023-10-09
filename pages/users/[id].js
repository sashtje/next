import {useRouter} from "next/router";

import styles from '../../styles/User.module.scss';
import {MainContainer} from "../../components/MainContainer";

export default function User ({user}) {
  const { query } = useRouter();

  return (
    <MainContainer title="User">
      <div className={styles.user}>
        <h1>User with id = {query.id}</h1>
        <div>Name - {user.name}</div>
        <div>Email - {user.email}</div>
        <div>Phone - {user.phone}</div>
      </div>
    </MainContainer>
  );
}

export async function getServerSideProps({params}) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const user = await response.json();

  return {
    props: {user},
  }
}
