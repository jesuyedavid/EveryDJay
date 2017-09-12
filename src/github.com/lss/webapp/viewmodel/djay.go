package viewmodel

type DJay struct {
	Profile string
	Songs   string
}

func NewDJay() DJay {
	result := DJay{
		Profile: "JesuyeDavid",
		Songs:   "Love Dont care",
	}
	return result
}
