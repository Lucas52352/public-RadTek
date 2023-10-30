import { UserModel } from "../../models/user"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

// const tokenLifetime = 2

export const loginController = async (email: string, password: string) => {
    const userFound = await UserModel.findOne({ email })
    if (!userFound) throw new Error('Email is not valid');

    if (userFound && (await bcrypt.compare(password, userFound.password))) {
        const accesToken = jwt.sign({
            user: {
                username: userFound.username,
                email: userFound.email,
                cart: userFound.cart,
                admin: userFound.admin,
                id: userFound._id
            },
        }, process.env.TOKEN_SECRET
        )

        return accesToken
    } else {
        throw new Error('Password is not valid');
    }

}


// function generateAccessToken(userId: string) {
//     const payload = { userId };
//     const options = { expiresIn: tokenLifetime };
//     return jwt.sign(payload, process.env.TOKEN_SECRET , options);
//   }

// function renewToken() {
//     const accessToken = generateAccessToken('usuario_id'); // Cambia 'usuario_id' por el ID de tu usuario actual
//     console.log('Token renovado:', accessToken);
  
//     // Configura el temporizador para la próxima renovación en 2 minutos
//     setTimeout(renewToken, tokenLifetime * 1000);
//   }
  
//   renewToken() 

  