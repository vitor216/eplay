import { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import Button from '../../components/Button'
import Card from '../../components/Card'
import boleto from '../../assets/images/barcode.png'
import cartao from '../../assets/images/cartao.png'
import { usePurchaseMutation } from '../../services/api'
import { Row, InputGroup, TabButton } from './styles'
import { RootReducer } from '../../store'
import { formataPreco, getTotalPrice } from '../../utils'

type Installment = {
  quantity: number
  amount: number
  formattedAmount: string
}

const Checkout = () => {
  const [payWithCard, setpayWithCard] = useState(false)
  const [purchase, { data, isSuccess }] = usePurchaseMutation()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [installments, setInstallments] = useState<Installment[]>([])

  const totalPrice = getTotalPrice(items)

  const form = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      cpf: '',
      deliveryEmail: '',
      confirmdeliveryEmail: '',
      cardOwner: '',
      cpfcardOwner: '',
      cardDisplayName: '',
      cardNumber: '',
      expiresMonth: '',
      expiresYear: '',
      cardCode: '',
      installments: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      email: Yup.string()
        .email('E-mail invalido')
        .required('O campo é obrigatório'),
      cpf: Yup.string()
        .min(14, 'O campo precisa ter pelo menos 14 caracteres')
        .max(15, 'O campo precisa ter 14 caracteres')
        .required('O campo é obrigatório'),
      deliveryEmail: Yup.string()
        .email('E-mail invalido')
        .required('O campo é obrigatório'),
      confirmdeliveryEmail: Yup.string()
        .oneOf([Yup.ref('deliveryEmail')], 'Os e-mails são diferentes')
        .required('O campo é obrigatório'),
      cardOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cpfcardOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cardDisplayName: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      expiresMonth: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      expiresYear: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      installments: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        billing: {
          document: values.cpf,
          email: values.email,
          name: values.fullName
        },
        delivery: {
          email: values.deliveryEmail
        },
        payment: {
          installments: 1,
          card: {
            active: payWithCard,
            code: Number(values.cardCode),
            name: values.cardOwner,
            number: values.cardNumber,
            owner: {
              document: values.cpfcardOwner,
              name: values.cardOwner
            },
            expires: {
              month: 1,
              year: 2023
            }
          }
        },
        products: [
          {
            id: 1,
            price: 10
          }
        ]
      })
    }
  })

  const checkInputHasError = (FieldName: string) => {
    const isTouched = FieldName in form.touched
    const isInvalid = FieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  useEffect(() => {
    const calculateInstallments = () => {
      const installmentsArray: Installment[] = []
      for (let i = 1; i <= 6; i++) {
        installmentsArray.push({
          quantity: i,
          amount: totalPrice / i,
          formattedAmount: formataPreco(totalPrice / i)
        })
      }
      return installmentsArray
    }

    if (totalPrice > 0) {
      setInstallments(calculateInstallments())
    }
  }, [totalPrice])

  if (items.length === 0) {
    return <Navigate to="/" />
  }

  return (
    <div className="container">
      {isSuccess ? (
        <Card title="Muito Obrigado">
          <>
            <p>
              É com satisfação que informamos que recebemos seu pedido com
              sucesso! <br />
              Abaixo estão os detalhes da sua compra: <br />
              Número do pedido: {data.orderId} <br />
              Forma de pagamento:{' '}
              {payWithCard ? 'Cartão de crédito' : 'Boleto Bancário'}
            </p>
            <p className="margin-top">
              Caso tenha optado pelo pagamento via boleto bancário, lembre-se de
              que a confirmação pode levar até 3 dias úteis. Após a aprovação do
              pagamento, enviaremos um e-mail contendo o código de ativação do
              jogo.
            </p>
            <p className="margin-top">
              Se você optou pelo pagamento com cartão de crédito, a liberação do
              código de ativação ocorrerá após a aprovação da transação pela
              operadora do cartão. Você receberá o código no e-mail cadastrado
              em nossa loja.
            </p>
            <p className="margin-top">
              Pedimos que verifique sua caixa de entrada e a pasta de spam para
              garantir que receba nossa comunicação. Caso tenha alguma dúvida ou
              necessite de mais informações, por favor, entre em contato conosco
              através dos nossos canais de atendimento ao cliente.
            </p>
            <p className="margin-top">
              Agradecemos por escolher a EPLAY e esperamos que desfrute do seu
              jogo!
            </p>
          </>
        </Card>
      ) : (
        <form onSubmit={form.handleSubmit}>
          <Card title="Dados de Cobrança">
            <>
              <Row>
                <InputGroup>
                  <label htmlFor="fullName">Nome Completo:</label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    value={form.values.fullName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('fullName') ? 'error' : ''}
                  />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="email">E-mail:</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.values.email}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('email') ? 'error' : ''}
                  />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="cpf">CPF:</label>
                  <input
                    id="cpf"
                    type="text"
                    name="cpf"
                    value={form.values.cpf}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cpf') ? 'error' : ''}
                  />
                </InputGroup>
              </Row>
              <h3 className="margin-top">
                Dados de Entrega - conteúdo digital
              </h3>
              <Row>
                <InputGroup>
                  <label htmlFor="deliveryEmail">email:</label>
                  <input
                    id="deliveryEmail"
                    type="email"
                    name="deliveryEmail"
                    value={form.values.deliveryEmail}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('deliveryEmail') ? 'error' : ''
                    }
                  />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="confirmdeliveryEmail">
                    Confirme o e-mail:
                  </label>
                  <input
                    id="confirmdeliveryEmail"
                    type="email"
                    name="confirmdeliveryEmail"
                    value={form.values.confirmdeliveryEmail}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('confirmdeliveryEmail') ? 'error' : ''
                    }
                  />
                </InputGroup>
              </Row>
            </>
          </Card>
          <Card title="Pagamento">
            <>
              <TabButton
                isActive={!payWithCard}
                onClick={() => setpayWithCard(false)}
                type="button"
              >
                <img src={boleto} alt="Boleto" />
                Boleto bancário
              </TabButton>
              <TabButton
                isActive={payWithCard}
                onClick={() => setpayWithCard(true)}
                type="button"
              >
                <img src={cartao} alt="Cartão de crédito" />
                Cartão de crédito
              </TabButton>
              <div className="margin-top">
                {payWithCard ? (
                  <>
                    <Row>
                      <InputGroup>
                        <label htmlFor="cardOwner">
                          Nome do Titular do Cartão
                        </label>
                        <input
                          type="text"
                          id="cardOwner"
                          name="cardOwner"
                          value={form.values.cardOwner}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('cardOwner') ? 'error' : ''
                          }
                        />
                      </InputGroup>
                      <InputGroup>
                        <label htmlFor="cpfcardOwner">
                          CPF do Titular do Cartão
                        </label>
                        <input
                          type="text"
                          id="cpfcardOwner"
                          name="cpfcardOwner"
                          value={form.values.cpfcardOwner}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('cpfcardOwner') ? 'error' : ''
                          }
                        />
                      </InputGroup>
                    </Row>
                    <Row marginTop="24px">
                      <InputGroup>
                        <label htmlFor="cardDisplayName">Nome no Cartão</label>
                        <input
                          type="text"
                          id="cardDisplayName"
                          name="cardDisplayName"
                          value={form.values.cardDisplayName}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('cardDisplayName') ? 'error' : ''
                          }
                        />
                      </InputGroup>
                      <InputGroup>
                        <label htmlFor="cardNumber">Numero do Cartão</label>
                        <input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          value={form.values.cardNumber}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('cardNumber') ? 'error' : ''
                          }
                        />
                      </InputGroup>
                      <InputGroup maxWidth="123px">
                        <label htmlFor="expiresMonth">Mês de expiração</label>
                        <input
                          type="text"
                          id="expiresMonth"
                          name="expiresMonth"
                          value={form.values.expiresMonth}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('expiresMonth') ? 'error' : ''
                          }
                        />
                      </InputGroup>
                      <InputGroup maxWidth="123px">
                        <label htmlFor="expiresYear">Ano de expiração</label>
                        <input
                          type="text"
                          id="expiresYear"
                          name="expiresYear"
                          value={form.values.expiresYear}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('expiresYear') ? 'error' : ''
                          }
                        />
                      </InputGroup>
                      <InputGroup maxWidth="48px">
                        <label htmlFor="cardCode">CVV</label>
                        <input
                          type="text"
                          id="cardCode"
                          name="cardCode"
                          value={form.values.cardCode}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('cardCode') ? 'error' : ''
                          }
                        />
                      </InputGroup>
                    </Row>
                    <Row marginTop="24px">
                      <InputGroup maxWidth="130px">
                        <label htmlFor="installments">Parcelamento</label>
                        <select
                          id="installments"
                          name="installments"
                          value={form.values.installments}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('installments') ? 'error' : ''
                          }
                        >
                          {installments.map((installment) => (
                            <option key={installment.quantity}>
                              {installment.quantity}x de{' '}
                              {installment.formattedAmount}
                            </option>
                          ))}
                        </select>
                      </InputGroup>
                    </Row>
                  </>
                ) : (
                  <p className="margin-top">
                    Ao optar por essa forma de pagamento, é importante lembrar
                    que a confirmação pode levar até 3 dias úteis, devido aos
                    prazos estabelecidos pelas instituições financeiras.
                    Portanto, a liberação do código de ativação do jogo
                    adquirido ocorrerá somente após a aprovação do pagamento do
                    boleto.
                  </p>
                )}
              </div>
            </>
          </Card>
          <Button
            type="submit"
            title="Clique aqui para finalizae a compra"
            onClick={form.handleSubmit}
          >
            Finalizar Compra
          </Button>
        </form>
      )}
    </div>
  )
}

export default Checkout
