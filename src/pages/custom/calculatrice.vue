<template>
    <q-page class="main-page"  id="">
        <section class="page-section q-pa-md" >
            <div class="container">
                <div class="row q-col-gutter-x-md">
                    <div  class="col-12 comp-grid" >
                        <div class=" text-h6 text-bold" >
                            calculatrice
                        </div>
                    </div>
                    <div  class="col-sm-8 col-md-8 col-12 comp-grid" >
                        <div class="">
                            <div class="calculator">
                                <div class="screen">{{ display }}</div>
                                <div class="buttons">
                                    <button 
                                    v-for="button in buttons" 
                                    :key="button.value" 
                                    @click="handleButtonClick(button)"
                                    >
                                    {{ button.label }}
                                    </button>
                                </div>
                            </div>
                            <div>
                                <!-- Votre contenu ici -->
                                <!-- Bouton de retour -->
                                <q-btn @click="retourPageHome" color="primary" label="Retour à la page d'accueil" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </q-page>
    
</template>
<script setup>
	import {  computed, ref } from 'vue';
	
	
	import { useApp } from 'src/composables/app.js';
	
	
	
	const props = defineProps({
		pageName: {
			type: String,
			default: 'home',
		},
		routeName: {
			type: String,
			default: 'home',
		},
		isSubPage: {
			type : Boolean,
			default : false,
		},
	});
	const app = useApp();
	
	const pageReady = ref(true);
	const display = ref('0');
const currentInput = ref('0');
const previousInput = ref(null);
const operator = ref(null); 
const buttons = [
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '+', value: '+' },
  { label: '4', value: '4' },
  { label: '5', value: '5' },
  { label: '6', value: '6' },
  { label: '-', value: '-' },
  { label: '7', value: '7' },
  { label: '8', value: '8' },
  { label: '9', value: '9' },
  { label: '', value: '' },
  { label: '0', value: '0' },
  { label: '.', value: '.' },
  { label: '%', value: '%' },
  { label: '/', value: '/' },
  { label: '√', value: '√' },
  { label: '=', value: '=' },
  { label: 'C', value: 'C' },
];
const isNumber = (input) => {
  return /^\d+(\.\d+)?$/.test(input);
};
const isOperator = (input) => {
  return ['+', '-', '*', '/', '%'].includes(input);
};
const handleNumberInput = (number) => {
  if (currentInput.value === '0') {
    currentInput.value = number;
  } else {
    currentInput.value += number;
  }
  display.value = currentInput.value;
};
const handleOperatorInput = (operatorValue) => {
  if (previousInput.value === null) {
    previousInput.value = currentInput.value;
  } else {
    handleEqual();
  }
  operator.value = operatorValue;
  currentInput.value = '0';
};
const handleRoot = () => {
  const number = parseFloat(currentInput.value);
  if (!isNaN(number)) {
    currentInput.value = Math.sqrt(number).toString();
    display.value = currentInput.value;
  }
};
const handleEqual = () => {
  const prevNumber = parseFloat(previousInput.value);
  const currentNumber = parseFloat(currentInput.value);
  if (!isNaN(prevNumber) && !isNaN(currentNumber) && operator.value) {
    switch (operator.value) {
      case '+':
        currentInput.value = (prevNumber + currentNumber).toString();
        break;
      case '-':
        currentInput.value = (prevNumber - currentNumber).toString();
        break;
      case '*':
        currentInput.value = (prevNumber * currentNumber).toString();
        break;
      case '/':
        currentInput.value = (prevNumber / currentNumber).toString();
        break;
      case '%':
        currentInput.value = ((prevNumber / 100) * currentNumber).toString();
        break;
    }
    display.value = currentInput.value;
    previousInput.value = null;
    operator.value = null;
  }
};
const handleClear = () => {
  display.value = '0';
  currentInput.value = '0';
  previousInput.value = null;
  operator.value = null;
};
const handleButtonClick = (button) => {
  const { value } = button;
  if (isNumber(value)) {
    handleNumberInput(value);
  } else if (isOperator(value)) {
    handleOperatorInput(value);
  } else if (value === '√') {
    handleRoot();
  } else if (value === '=') {
    handleEqual();
  } else if (value === 'C') {
    handleClear();
  }
};
const retourPageHome = () => {
  router.push('/home');
};

</script>
<style scoped>
.calculator {
  width: 240px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}
.screen {
  width: 100%;
  height: 40px;
  background-color: #f8f8f8;
  text-align: right;
  padding: 5px;
  font-size: 18px;
  border-radius: 3px;
  margin-bottom: 10px;
  box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.1);
}
.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
}
button {
  width: 100%;
  height: 40px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}
button:hover {
  background-color: #e0e0e0;
}
button:active {
  background-color: #d0d0d0;
}
</style>
