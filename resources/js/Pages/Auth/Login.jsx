import React, { useEffect } from 'react'
import { Head, Link, useForm } from '@inertiajs/react'
import Button from '@/Components/Button'
import Label from '@/Components/Label'
import Input from '@/Components/Input'
import ValidationErrors from '@/Components/ValidationErrors'


export default function Login({status, canResetPassword}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    //ketika pertama kali meload akan reset password
    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) =>{
        setData(event.target.name, event.target.value)
    }

    const submit = (e) => {
        e.preventDefault();

        // console.log(data);
        post(route('login'));
    };


  return (
  <>
  <Head title='Sign In'/>
  <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
    <div className="fixed top-[-50px] hidden lg:block">
        <img src="/images/signup-image.png"
            className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]" alt=""/>
    </div>
    <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
        <div>
            <img src="/images/moonton-white.svg" alt=""/>
            <div className="my-[70px]">
                <div className="font-semibold text-[26px] mb-3">
                    Welcome Back
                </div>
                <p className="text-base text-[#767676] leading-7">
                    Explore our new movies and get <br/>
                    the better insight for your life
                </p>
                <ValidationErrors errors={errors}/>

            </div>
            <form className="w-[370px]" onSubmit={submit}>
                <div className="flex flex-col gap-6">
                    <div>
                        <Label
                        value="Email Address"
                        />
                        <Input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            required={true}
                            value={data.email}
                            isFocused={true}
                            handleChange={onHandleChange}
                        />
                    </div>
                    <div>
                        <Label
                        value="Password"
                        />
                        <Input
                            type="password"
                            name="password"
                            placeholder="Password"
                            required={true}
                            value={data.password}
                            handleChange={onHandleChange}
                        />
                    </div>
                </div>
                <div className="grid space-y-[14px] mt-[30px]">

                        <Button
                    type='submit'
                    processing={processing}
                    variant='primary'
                    >
                    <span className="text-base font-semibold">
                            Start Watching
                        </span>
                    </Button>

                 <Link href={ route('register') }>
                 <Button
                    type='button'
                    variant='light-outline'
                    >
                    <span className="text-base text-white">
                            Create New Account
                        </span>
                    </Button>
                 </Link>
                </div>
            </form>
        </div>
    </div>
</div>
  </>
  )
}
