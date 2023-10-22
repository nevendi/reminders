import { Controller } from '@nestjs/common';
import {BaseController} from "../../common/base.controller";
import {Receiver} from "../entities/receiver.entity";
import {ReceiversService} from "./receivers.service";

@Controller('receivers')
export class ReceiversController extends BaseController<Receiver>{
    constructor(private readonly receiversService: ReceiversService){
        super(receiversService);
    }
}
