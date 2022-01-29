export const MercadoPago = () => {
  return (
    <form id='form-checkout'>
      <label>Card Number</label>
      <input type='text' name='cardNumber' id='form-checkout__cardNumber' />
      <label>Expiration Date</label>
      <input
        type='text'
        name='cardExpirationDate'
        id='form-checkout__cardExpirationDate'
      />
      <label>Name</label>
      <input
        type='text'
        name='cardholderName'
        id='form-checkout__cardholderName'
      />
      <label>Email</label>
      <input
        type='email'
        name='cardholderEmail'
        id='form-checkout__cardholderEmail'
      />
      <label>Security Code</label>
      <input type='text' name='securityCode' id='form-checkout__securityCode' />
      <select name='issuer' id='form-checkout__issuer'>
        <option>Bancor</option>
        <option>Macro</option>
        <option>Credicop</option>
        <option>Nacion</option>
        <option>BBVA</option>
        <option>Supervielle</option>
        <option>Santander</option>
      </select>
      <select name='identificationType' id='form-checkout__identificationType'>
        <option>DNI</option>
        <option>CUIT</option>
        <option>Pasaporte</option>
      </select>
      <input
        type='text'
        name='identificationNumber'
        id='form-checkout__identificationNumber'
      />
      <select name='installments' id='form-checkout__installments'></select>
      <button type='submit' id='form-checkout__submit'>
        Pagar
      </button>
      <progress value='0' className='progress-bar'>
        Cargando...
      </progress>
    </form>
  );
};

const mp = new window.MercadoPago('TEST-8e890486-48b1-4c7e-adf4-41dfc15889d7');

let root = document.getElementById('root');
root.addEventListener('load', function () {
  const cardForm = mp.cardForm({
    amount: '100.5',
    autoMount: true,
    form: {
      id: 'form-checkout',
      cardholderName: {
        id: 'form-checkout__cardholderName',
        placeholder: 'Titular de la tarjeta',
      },
      cardholderEmail: {
        id: 'form-checkout__cardholderEmail',
        placeholder: 'E-mail',
      },
      cardNumber: {
        id: 'form-checkout__cardNumber',
        placeholder: 'Número de la tarjeta',
      },
      cardExpirationDate: {
        id: 'form-checkout__cardExpirationDate',
        placeholder: 'Data de vencimiento (MM/YYYY)',
      },
      securityCode: {
        id: 'form-checkout__securityCode',
        placeholder: 'Código de seguridad',
      },
      installments: {
        id: 'form-checkout__installments',
        placeholder: 'Cuotas',
      },
      identificationType: {
        id: 'form-checkout__identificationType',
        placeholder: 'Tipo de documento',
      },
      identificationNumber: {
        id: 'form-checkout__identificationNumber',
        placeholder: 'Número de documento',
      },
      issuer: {
        id: 'form-checkout__issuer',
        placeholder: 'Banco emisor',
      },
    },
    callbacks: {
      onFormMounted: (error) => {
        if (error) return console.warn('Form Mounted handling error: ', error);
        console.log('Form mounted');
      },
      onSubmit: (event) => {
        event.preventDefault();

        const {
          paymentMethodId: payment_method_id,
          issuerId: issuer_id,
          cardholderEmail: email,
          amount,
          token,
          installments,
          identificationNumber,
          identificationType,
        } = cardForm.getCardFormData();

        fetch('/process_payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            token,
            issuer_id,
            payment_method_id,
            transaction_amount: Number(amount),
            installments: Number(installments),
            description: 'Descripción del producto',
            payer: {
              email,
              identification: {
                type: identificationType,
                number: identificationNumber,
              },
            },
          }),
        });
      },
      onFetching: (resource) => {
        console.log('Fetching resource: ', resource);

        // Animate progress bar
        const progressBar = document.querySelector('.progress-bar');
        progressBar.removeAttribute('value');

        return () => {
          progressBar.setAttribute('value', '0');
        };
      },
    },
  });
});
