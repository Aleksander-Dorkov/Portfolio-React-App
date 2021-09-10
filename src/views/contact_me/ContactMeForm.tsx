import React, {BaseSyntheticEvent, useState} from "react";
import {Button, CircularProgress, Grid, TextField} from "@material-ui/core";
import {useForm} from "react-hook-form";
import emailjs from 'emailjs-com';
import {toast, ToastContainer, Zoom} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ContactMeForm() {
    const {register, handleSubmit, errors} = useForm({
        defaultValues: {
            email: '',
            name: '',
            message: ''
        }
    });
    const [loading, setLoading] = useState<boolean>(false);

    function onSubmit(data: any, event: BaseSyntheticEvent | undefined) {
        setLoading(true);
        if (event === undefined) {
            setLoading(false);
            return;
        }
        emailjs.sendForm('gmail', 'template_djoyjve', event.target, 'user_6EWwJ2wkUdvLuWsqq33Sr')
            .then((result: any) => {
                setLoading(false);
                event.target.reset();
                toast.success(`Thank you for your feedback ${data.name}`, {

                })
                console.log(result.text);
            }, (error: any) => {
                setLoading(false);
                event.target.reset();
                toast.error(`Error: ${error.text}`, {

                })
                console.log(error.text);
            });
    }

    return (
        <>
            <Grid item={true} xs={12} md={5}>
                <form
                    onSubmit={handleSubmit((data: any, event: BaseSyntheticEvent | undefined) => onSubmit(data, event))}>
                    <TextField required={true}
                               fullWidth={true}
                               label="Name"
                               name={'name'}
                               className={'mb-3 mt-2'}
                               placeholder={'at least 4 chars long'}
                               inputRef={register({
                                   required: true,
                                   minLength: 4
                               })}
                               error={Boolean(errors.name)}
                               helperText={errors.name ? 'Must be least 4 chars long' : ''}
                    />
                    <TextField fullWidth={true}
                               required={true}
                               label="E-mail"
                               name={'email'}
                               className={'mb-3'}
                               placeholder={'provide some valid email'}
                               inputRef={register({
                                   required: true,
                                   pattern: new RegExp('^[^@]+@[^@]+\\.[^@]+$')
                               })}
                               error={Boolean(errors.email)}
                               helperText={errors.email ? 'Must have only one @, at least one character before the @, at least one character before the DOT and at least one after it:' : ''}
                    />
                    <TextField required={true}
                               fullWidth={true}
                               label="Message"
                               name={'message'}
                               className={'mb-3'}
                               placeholder={'your feedback, min 10 chars'}
                               multiline={true}
                               rows={5}
                               inputRef={register({
                                   required: true,
                                   minLength: 10
                               })}
                               error={Boolean(errors.message)}
                               helperText={errors.message ? 'Must be least 10 chars long' : ''}
                    />
                    <Button variant="contained"
                            type={'submit'}
                            disabled={loading}
                            color="primary">
                        Send Feedback
                        {loading && <CircularProgress size={20}/>}
                    </Button>
                </form>
                <ToastContainer transition={Zoom} style={{width: '18%', height: '50%'}} position={"bottom-center"}/>
            </Grid>
        </>
    )
}

export {ContactMeForm}
