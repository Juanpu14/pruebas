<template>
  <div class="contact">
    <h1>{{ $t('contact.title') }}</h1>

    <div class="contact-content">
      <div class="contact-text">
        <form @submit.prevent="enviarFormulario">
          <div class="form-group">
            <h2>{{ $t('contact.name.title') }}</h2>
            <input v-model="form.nombre" placeholder="Nombre" class="block mb-2 border p-2 w-full" />
          </div>

          <div class="form-group">
            <h2>{{ $t('contact.email.title') }}</h2>
            <input v-model="form.mail" placeholder="Mail" class="block mb-2 border p-2 w-full" />
          </div>

          <div class="form-group">
            <h2>{{ $t('contact.message.title') }}</h2>
            <input v-model="form.asunto" placeholder="Asunto" class="block mb-2 border p-2 w-full" />
          </div>

          <button type="submit">{{ $t('contact.send.title') }}</button>
        </form>
      </div>
    </div>
  </div>
</template> 




<script>
/*export default {
  data() {<input v-model="form.telefono" placeholder="Teléfono" class="block mb-2 border p-2 w-full" />
    return {
      name: '',
      email: '',
      message: ''
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await fetch('http://localhost/prueba/backend/contact.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            message: this.message
          })
        });

        const result = await response.json();
        console.log(result); 

        if (result.success) {
          alert('Mensaje enviado con éxito');
          this.name = '';
          this.email = '';
          this.message = '';
        } else {
          alert('Error al enviar el mensaje: ' + result.message);
        }
      } catch (err nor) {
        alert('Error de red o servidor');
        console.error(error);
      }
    }
  }
};*/

export default {
  name: "FormularioView",
  data() {
    return {
      form: {
        nombre: '',
        mail: '',
        telefono: '',
        asunto: ''
      }
    };
  },
  methods: {
    enviarFormulario() {
      const datosActuales = JSON.parse(localStorage.getItem('formularios')) || [];
      datosActuales.push({ ...this.form });
      localStorage.setItem('formularios', JSON.stringify(datosActuales));
      this.$router.push({ name: 'lista' });
    }
  }
};
</script>






<style scoped>
.contact {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: var(--bg-color);
  color: var(--text-color);
}

.contact-content {
  margin-top: 2rem;
}

h1 {
  color: var(--primary-color);
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}

h2 {
  font-size: 1rem;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

input,
textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--primary-color);
  border-radius: 6px;
  box-sizing: border-box;
  font-size: 1rem;
  font-family: inherit;
  background-color: var(--bg-color);
  color: var(--text-color);
  transition: border-color 0.2s ease, background-color 0.3s ease, color 0.3s ease;
}

input:focus,
textarea:focus {
  border-color: var(--link-hover-color);
  outline: none;
}

textarea {
  min-height: 120px;
  resize: vertical;
}

button {
  background-color: var(--primary-color);
  color: var(--secondary-color);
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: var(--link-hover-color);
}
</style>



