import {HomeBox, HomeTitle} from './Home.styled';

export default function Home() {
    console.log('HomePage');
    return (
      <HomeBox>
        <HomeTitle>
          Create your phonebook !
        </HomeTitle>
      </HomeBox>
    );
  }