import React from 'react';
import TextFieldGroup from '../common/TextFieldGroup';

export default class InverterForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inverterManufacturer: props.inverter
        ? props.inverter.inverterManufacturer
        : '',
      inverterType: props.inverter ? props.inverter.inverterType : '',
      acOutputVoltage: props.inverter ? props.inverter.acOutputVoltage : '',
      maxAcCurrentOutput: props.inverter
        ? props.inverter.maxAcCurrentOutput
        : '',
      maxDcVoltage: props.inverter ? props.inverter.maxDcVoltage : '',
      startupVoltage: props.inverter ? props.inverter.startupVoltage : '',
      cec: props.inverter ? props.inverter.cec : '',
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit = e => {
    e.preventDefault();

    if (!this.state.inverterManufacturer) {
      this.setState(() => ({
        error: 'Please provide inverterManufacturer.'
      }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        inverterManufacturer: this.state.inverterManufacturer,
        inverterType: this.state.inverterType,
        maxPowerOutput: this.state.maxPowerOutput,
        acOutputVoltage: this.state.acOutputVoltage,
        maxAcCurrentOutput: this.state.maxAcCurrentOutput,
        maxDcVoltage: this.state.maxDcVoltage,
        startupVoltage: this.state.startupVoltage,
        cec: this.state.cec
      });
    }
  };
  render() {
    const { errors } = this.state;

    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
        <TextFieldGroup
        placeholder="InverterManufacturer"
        name="name"
        value={this.state.inverterManufacturer}
        onChange={this.inverterManufacturer}
        error={errors.inverterManufacturer}
      />
        <TextFieldGroup
        placeholder="inverterType"
        name="name"
        value={this.state.inverterType}
        onChange={this.inverterType}
        error={errors.inverterType}
      />
        <TextFieldGroup
        placeholder="acOutputVoltage"
        name="name"
        value={this.state.acOutputVoltage}
        onChange={this.acOutputVoltage}
        error={errors.acOutputVoltage}
      />
        <TextFieldGroup
        placeholder="maxPowerOutput"
        name="name"
        value={this.state.maxPowerOutput}
        onChange={this.maxPowerOutput}
        error={errors.maxPowerOutput}
      />
        <TextFieldGroup
        placeholder="acOutputVoltage"
        name="name"
        value={this.state.acOutputVoltage}
        onChange={this.acOutputVoltage}
        error={errors.acOutputVoltage}
      />
        <TextFieldGroup
        placeholder="maxAcCurrentOutput"
        name="name"
        value={this.state.maxAcCurrentOutput}
        onChange={this.maxAcCurrentOutput}
        error={errors.maxAcCurrentOutput}
      />
        <TextFieldGroup
        placeholder="maxDcVoltage"
        name="name"
        value={this.state.maxDcVoltage}
        onChange={this.maxDcVoltage}
        error={errors.maxDcVoltage}
      />
        <TextFieldGroup
        placeholder="startupVoltage"
        name="name"
        value={this.state.startupVoltage}
        onChange={this.startupVoltage}
        error={errors.startupVoltage}
      />
        <TextFieldGroup
        placeholder="cec"
        name="name"
        value={this.state.cec}
        onChange={this.cec}
        error={errors.cec}
      />
       
         
          {<button>Add Inverter</button>}
        </form>
      </div>
      // inverterManufacturer
      // inverterType
      // maxPowerOutput
      // acOutputVoltage
      // maxPowerOutput
      // acOutputVoltage
      // maxAcCurrentOutput
      // maxDcVoltage
      // startupVoltage
      // cec
    );
  }
}
