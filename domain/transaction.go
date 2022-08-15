package domain

type Transaction struct {
	ID           string
	Amount       float64
	Status       string
	Description  string
	Store        string
	CreditCardId string
	CreatedAt    time.Time
}

func NewTransaction() &Transaction { //recebe um ponteiro
	t := &Transaction{}
	t.ID = uuid.NewV4().String()
	
}