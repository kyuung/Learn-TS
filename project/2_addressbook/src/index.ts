interface PhoneNumberDictionary {
  [phone: string]: {
    num: number;
  };
}

interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}

enum PhoneType {
  Home = 'home',
  Office = 'office',
  Studio = 'studio',
}

// api - 비동기 처리를 통해서 돌려받을 반환값을 처리를 해주어야 한다.
// 프로미스는 기본적으로 제네릭 타입을 통해 정의해야 한다. 프로미스에서 resolve되는 값이 반환 타입으로 들어가야 한다.
function fetchContacts(): Promise<Contact[]> {
  const contacts: Contact[] = [
    {
      name: 'Tony',
      address: 'Malibu',
      phones: {
        home: {
          num: 11122223333,
        },
        office: {
          num: 44455556666,
        },
      },
    },
    {
      name: 'Banner',
      address: 'New York',
      phones: {
        home: {
          num: 77788889999,
        },
      },
    },
    {
      name: '마동석',
      address: '서울시 강남구',
      phones: {
        home: {
          num: 213423452,
        },
        studio: {
          num: 314882045,
        },
      },
    },
  ];
  return new Promise(resolve => {
    setTimeout(() => resolve(contacts), 2000);
  });
}

// main
class AddressBook {
  public contacts: Contact[] = [];

  constructor() {
    this.fetchData();
  }

  // 명시적으로 리턴이 있는게 아니라, 셋업을 하는 것이기 때문에 반환값은 없습니다하고 void로 넣어주면 된다.
  fetchData(): void {
    fetchContacts().then(response => {
      this.contacts = response;
    });
  }

  findContactByName(name: string): Contact[] {
    return this.contacts.filter(contact => contact.name === name);
  }

  findContactByAddress(address: string): Contact[] {
    return this.contacts.filter(contact => contact.address === address);
  }

  // phoneType: home, office, studio <= 이 부분에서 오탈자가 날 수 있다. 이걸 enum을 이용해서 변수화를 할 수 있다.
  // findContactByPhone(PhoneType.Home) 같은 방법으로 접근할 수 있어서 안전하다.
  findContactByPhone(phoneNumber: number, phoneType: PhoneType): Contact[] {
    return this.contacts.filter(contact => contact.phones[phoneType].num === phoneNumber);
  }

  addContact(contact: Contact): void {
    this.contacts.push(contact);
  }

  // name만 뽑아서 주는거니까 string
  displayListByName(): string[] {
    return this.contacts.map(contact => contact.name);
  }

  // address만 뽑아서 주는거니까 string
  displayListByAddress(): string[] {
    return this.contacts.map(contact => contact.address);
  }
  /* ------------------------------------------------ */
}

new AddressBook();
