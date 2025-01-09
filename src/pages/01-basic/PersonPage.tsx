import { useShallow } from 'zustand/shallow';
import { WhiteCard } from '../../components';
import { usePersonStore } from '../../stores/person/person.store';



export const PersonPage = () => {

  const fistName = usePersonStore(state => state.fistName);
  const lastName = usePersonStore(state => state.lastName);

  return (
    <>
      <h1>Persona</h1>
      <p>Información que se compartirá a otro store, Session Storage y Firebase</p>
      <hr />

      <WhiteCard className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <form>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <InputFistName />
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <InputLastName />
              </div>
            </div>

            <pre className="bg-gray-200 p-5 rounded-[20px]">
              {
                JSON.stringify({
                  firstName: fistName,
                  lastName: lastName
                }, null, 2)
              }
            </pre>
          </form>
        </div>
      </WhiteCard>
    </>
  );
};

const InputFistName = () => {

  const fistName = usePersonStore(state => state.fistName);
  const setFirstName = usePersonStore(state => state.setFirstName);

  return (
    <div className="mb-5" >
      <label
        className="mb-3 block text-base font-medium text-[#07074D]"
      >
        Primer Nombre
      </label>
      <input
        type="text"
        name="firstName"
        id="firstName"
        value={fistName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="Primer Nombre"
      />
    </div>
  )
}



const InputLastName = () => {

  const lastName = usePersonStore(useShallow(state => state.lastName));
  const setLastName = usePersonStore(state => state.setLastName);

  return (
    <div className="mb-5" >
      <label
        className="mb-3 block text-base font-medium text-[#07074D]"
      >
        Primer Nombre
      </label>
      <input
        type="text"
        name="firstName"
        id="firstName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Primer Nombre"
      />
    </div>
  )
}